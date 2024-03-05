import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import search from "../../assets/images/search.svg";
import * as Styles from "./styles";
interface Iprops {
  globalFilter?: string;
  setGlobalFilter?: any;
}
const SearchBar = ({ setGlobalFilter, globalFilter }: Iprops) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 1000);
  return (
    <div>
      <Styles.SearchInputImageWrapper>
        <Styles.SearchInputImage src={search} alt="searchicon" />
      </Styles.SearchInputImageWrapper>
      <Styles.DashboardSearchBar
        type="text"
        value={value || ""}
        onChange={(e: any) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="| Search"
      ></Styles.DashboardSearchBar>
    </div>
  );
};

export default SearchBar;
