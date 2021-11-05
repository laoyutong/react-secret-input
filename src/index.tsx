import { ChangeEvent, useEffect, useRef, useState } from "react";

interface SelectionData {
  start: number;
  end: number;
}

export interface InputPasswordProps {
  onChange: (v: string) => void;
  value: string;
}

const SECRET_SYMBOL = "•";

const InputPassword = ({
  onChange,
  value,
}: InputPasswordProps): JSX.Element => {
  const inputIns = useRef<HTMLInputElement>(null);
  const selectionData = useRef<SelectionData>({} as SelectionData);
  const timer = useRef<number>();

  const [displayedValue, setDisplayValue] = useState<string>(
    SECRET_SYMBOL.repeat(value.length)
  );
  const actualValue = useRef<string>(value);

  const handledChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { start, end } = selectionData.current;
    const v = e.target.value;

    const newLength = v.length;
    const oldLength = actualValue.current.length;

    let finalSelectPosition: number;

    timer.current && clearTimeout(timer.current);

    // 删除单个内容的情况
    if (start === end && oldLength > newLength) {
      const s = start - 1;

      actualValue.current =
        actualValue.current.substring(0, s) +
        actualValue.current.substring(s + 1, actualValue.current.length);
      setDisplayValue(SECRET_SYMBOL.repeat(newLength));
      finalSelectPosition = s;
    } else {
      const newStr = v.substring(start, end + newLength - oldLength);
      // 添加内容的情况
      if (!!newStr) {
        actualValue.current =
          actualValue.current.substring(0, start) +
          newStr +
          actualValue.current.substring(end, actualValue.current.length);
        setDisplayValue(
          newStr.length === 1
            ? SECRET_SYMBOL.repeat(start) +
                newStr +
                SECRET_SYMBOL.repeat(newLength - start - 1)
            : SECRET_SYMBOL.repeat(newLength)
        );
        finalSelectPosition = start + newStr.length;
      } else {
        // 批量删除内容的情况
        actualValue.current =
          actualValue.current.substring(0, start) +
          actualValue.current.substring(end, actualValue.current.length);
        setDisplayValue(SECRET_SYMBOL.repeat(newLength));
        finalSelectPosition = start;
      }
    }

    Promise.resolve().then(() => {
      if (inputIns.current) {
        inputIns.current.selectionStart = inputIns.current.selectionEnd =
          finalSelectPosition;
        selectionData.current = {
          start: finalSelectPosition,
          end: finalSelectPosition,
        };
      }
    });

    timer.current = setTimeout(() => {
      setDisplayValue(SECRET_SYMBOL.repeat(newLength));
      if (inputIns.current) {
        inputIns.current.selectionStart = selectionData.current.start;
        inputIns.current.selectionEnd = selectionData.current.end;
      }
    }, 1000);

    onChange(actualValue.current);
  };

  useEffect(() => {
    const getSelectionData = () => {
      selectionData.current = {
        start: inputIns.current?.selectionStart ?? 0,
        end: inputIns.current?.selectionEnd ?? 0,
      };
    };
    document.addEventListener("selectionchange", getSelectionData);
    return () =>
      document.removeEventListener("selectionchange", getSelectionData);
  }, []);

  useEffect(() => {
    const onCopy = (e: ClipboardEvent) => {
      const clipboardData = e.clipboardData;
      if (!clipboardData) {
        return;
      }

      const { start, end } = selectionData.current;
      if (start === end) {
        return;
      }
      e.preventDefault();
      clipboardData.setData(
        "text/plain",
        actualValue.current.substring(start, end)
      );
    };
    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, []);

  return (
    <input ref={inputIns} onChange={handledChange} value={displayedValue} />
  );
};

export default InputPassword;
