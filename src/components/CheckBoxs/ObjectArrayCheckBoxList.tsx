import { useState } from "react";

interface CheckboxValue {
  id: number;
  label: string;
}

interface CheckboxValues {
  checkboxValues: CheckboxValue[];
}

export default function ObjectArrayCheckBoxList({
  checkboxValues,
}: CheckboxValues) {
  const [checkedValues, setCheckedValues] = useState<number[]>([]);

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
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
            setCheckedValues(
              e.target.checked ? checkboxValues.map((item) => item.id) : []
            )
          }
        />
      </label>
      <br />
      {checkboxValues.map((item) => (
        <div key={item.id}>
          <label>
            {item.label}
            <input
              type="checkbox"
              value={item.id}
              checked={checkedValues.includes(item.id)}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
