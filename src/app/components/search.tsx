import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Input,
  Button,
} from "../exportfile";
const Search = () => {
  return (
    <div className="relative flex w-full bg-light rounded-md">
      <Input label="Find a Home..." className="pr-20" crossOrigin={undefined} />
      <Button size="sm" className="!absolute right-1 top-1 rounded bg-primary">
        Search
      </Button>
    </div>
  );
};

export default Search;
