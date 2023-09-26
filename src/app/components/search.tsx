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
    <Tabs id="custom-animation" value="buy">
      <TabsHeader className="w-52">
        <Tab value="buy">Buy</Tab>
        <Tab value="sell">Sell</Tab>
        <Tab value="rent">Rent</Tab>
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        <TabPanel value="buy" className="p-0 m-0">
          <div>
            <div className="relative flex w-full bg-light rounded-md">
              <Input
                label="Email Address"
                className="pr-20"
                crossOrigin={undefined}
              />
              <Button
                size="sm"
                className="!absolute right-1 top-1 rounded bg-primary"
              >
                Search
              </Button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="sell">Sell</TabPanel>
        <TabPanel value="rent">Rent</TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default Search;
