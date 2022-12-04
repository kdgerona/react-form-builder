import React, { useMemo, useState } from 'react';
import * as Pages from './pages';

const tabs = [
  {
    id: 1,
    label: 'React Form Builder',
    componentName: 'ReactFormBuilder2',
  },
];

function App() {
  const [currentTab, setCurrentTab] = useState(null);

  const handleSetCurrentTab = (item: any) => {
    setCurrentTab(item);
  };

  const TabsMapper = useMemo(
    () =>
      tabs.map((tab) => (
        <button onClick={() => handleSetCurrentTab(tab)}>{tab.label}</button>
      )),
    [tabs]
  );

  const renderPage = useMemo(() => {
    if (!currentTab) return <></>;
    const { componentName } = currentTab ?? {};

    const Page = Pages[componentName];

    if (!Page) return <></>;

    //@ts-ignore
    return <Page />;
  }, [currentTab]);

  return (
    <>
      {TabsMapper}
      {renderPage}
    </>
  );
}

export default App;
