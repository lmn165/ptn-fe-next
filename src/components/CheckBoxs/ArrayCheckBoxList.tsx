import { useState } from "react";

interface CheckboxProps<T extends { toString(): string }> {
  checkboxValues: T[];
}

export default function ArrayCheckBoxList<T extends { toString(): string }>({
  checkboxValues,
}: CheckboxProps<T>) {
  const [checkedValues, setCheckedValues] = useState<T[]>([]);

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value as unknown as T;
    console.log(checkedValues);
    if (e.target.checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    }
  }

  return (
    <div>
      <h2>Checkbox List</h2>
      <label>
        Check All
        <input
          type="checkbox"
          checked={checkedValues.length === checkboxValues.length}
          onChange={(e) =>
            setCheckedValues(e.target.checked ? checkboxValues : [])
          }
        />
      </label>
      <br />
      {checkboxValues.map((value) => (
        <div key={value.toString()}>
          <label>
            {value.toString()}
            <input
              type="checkbox"
              value={value.toString()}
              checked={checkedValues.includes(value)}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
