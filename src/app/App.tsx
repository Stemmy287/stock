import React from 'react';
import s from 'app/app.module.scss';
import {Header} from "app/Header/Header";
import {Stock} from "features/Stock/Stock";
import {LoadingLine} from "common/compontnes/LoadingLine/LoadingLine";
import {useAppSelector} from "hooks/useAppSelector";
import {errorSelector, isLoadingSelector} from "app/appSelectors";
import {ErrorBar} from "common/compontnes/ErrorBar/ErrorBar";

function App() {

  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  return (
    <div>
      <div className={s.header_loading}>
        <Header/>
        {isLoading && <LoadingLine/>}
      </div>
      <div className={s.main}>
        <Stock/>
      </div>
      {error && <ErrorBar/>}
    </div>
  );
}

export default App;
