import React, { useEffect, useState } from "react";

import { LanguagePropertyInterace } from "../../../../../../interfaces/componentInterfaces/languageInterfaces/interfaces";
import LanguagePropertiesState from "./render/LanguagePropertiesState";

import { useSelector, useDispatch } from "react-redux";
import {
  LanguageProTrue,
  LanguageProFalse,
  rootState,
} from "../../../../../../slices/languageSlice";

export default function Written(Props: LanguagePropertyInterace) {


  const store = useSelector(rootState);
  const dispatch = useDispatch();
  const { language } = Props;

  const keysForNoDialect = Object.keys(Props);
  const property = keysForNoDialect[0];

  const inStore = (() => {
    if (!Props.dialectLanguage) {
      return store.find((element) => {
        return (
          element.property === property &&
          element.language === language &&
          element.dialect === language
        );
      });
    } else {
      return store.find((element) => {
        return (
          element.property === property &&
          element.language === language &&
          element.dialect === Props?.dialectLanguage
        );
      });
    }
  })();



  const languageState = (() => {
    if (inStore === undefined) {
      return false;
    } else {

      return inStore.selected;
    }
  })();



  const [select, setSelect] = useState(languageState);

  useEffect(() => {
    if (inStore !== undefined) {
      if (inStore.selected === select) {
        console.log("catch");
        return;
      }
    }

    const reduxPayLoad = {
      selected: select,
      property,
      language,
      dialect: Props?.dialectLanguage || language,
    };
    if (select === true) {


      dispatch(LanguageProTrue(reduxPayLoad));
    } else if (select === false) {
      dispatch(LanguageProFalse(reduxPayLoad));
    }
  }, [select]);

  return (
    <div onClick={() => setSelect(!select)}>
      <LanguagePropertiesState {...{ property, selected: inStore?.selected }} />
    </div>
  );
}
