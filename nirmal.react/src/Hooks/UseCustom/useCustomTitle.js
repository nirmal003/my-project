import { useEffect } from "react";

function useCustomTitle(count) {
  useEffect(() => {
    console.log("hi");
    document.title = `Count - ${count}`;
  }, [count]);
}

export default useCustomTitle;
