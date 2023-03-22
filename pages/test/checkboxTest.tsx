// import { default as CheckBoxList } from "@/components/CheckBoxs/ObjectArrayCheckBoxList";
import CheckBoxList from "@/components/CheckBoxs/ObjectArrayCheckBoxList";
import ArrayCheckBoxList from "@/components/CheckBoxs/ArrayCheckBoxList";

export default function checkboxTest() {
  const objListData = [
    {
      id: 1,
      label: "선택지 1",
    },
    {
      id: 2,
      label: "선택지 123",
    },
    {
      id: 3,
      label: "선택지 abc",
    },
  ];
  const listData = [1, 2, 3];

  return (
    <>
      <div>
        <h1>체크박스 리스트 테스트 페이지</h1>
        <CheckBoxList checkboxValues={objListData} />
        <ArrayCheckBoxList checkboxValues={listData} />
      </div>
    </>
  );
}
