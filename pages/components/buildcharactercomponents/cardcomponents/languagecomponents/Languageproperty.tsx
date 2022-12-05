import React, { useState, useEffect } from "react";
import styles from "../../../../../styles/Home.module.css";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  addLanguagePro,
  LanguageProTrue,
  LanguageProFalse,
  rootState,
} from "../../../../../slices/languageSlice";

interface PropsInterface {
  language: string;
  dialectLanguage?: string;
  written?: boolean | null;
  spoken?: boolean | null;
  inflection?: boolean | null;
  proficiency?: boolean | null;
}

export default function Languageproperty(Props: PropsInterface) {
  const store = useSelector(rootState);
  const dispatch = useDispatch();

  const { language, dialectLanguage } = Props;
  const keysForNoDialect = Object.keys(Props);
  const property = keysForNoDialect[0];

  const [selected, setSelect] = useState(() => {
    if (typeof window !== "undefined") {
      if (typeof dialectLanguage === "string") {
        const saved: any = localStorage.getItem(
          language + property + dialectLanguage
        );

        const intialValue = JSON.parse(saved);
        return intialValue || false;
      } else {
        const saved: any = localStorage.getItem(language + property);

        // const thisLangProp = store.find((element: any) => {
        //   if (element.value === value) {
        //     return element;
        //   } else {
        //     return;
        //   }
        // });

        const intialValue = JSON.parse(saved);
        return intialValue || false;
      }
    }
  });
  useEffect(() => {
    if (typeof dialectLanguage === "string") {
      // localStorage.setItem(
      //   language + property + dialectLanguage,
      //   JSON.stringify(selected)
      // );
      // const value = language + property + dialectLanguage;
      // const languageProperty = { value, selected: selected };
      // return;
      // dispatch(addLanguagePro(languageProperty));
    } else {
      // const x = localStorage.getItem(language + property);
      const value = language + property;
      if (store === undefined) {
        return;
      }
      const thisLangProp = store.find((element: any) => {
        if (element.value === value) {
          return element;
        } else {
          return;
        }
      });

      if (thisLangProp === undefined) {
        const value = language + property;
        const languageProperty = { value, selected: selected };
        dispatch(addLanguagePro(languageProperty));
      } else {
        if (selected === thisLangProp.selected) {
          // this prevents useEffect running twice on mount unmount this is a poor behaviour is react 18.2
          return console.log("catch");
        } else {
          const value = language + property;
          const languageProperty = { value, selected: selected };
          if (selected === true) {
            dispatch(LanguageProTrue(languageProperty));
          } else {
            dispatch(LanguageProFalse(languageProperty));
          }
        }
      }

      // localStorage.setItem(language + property, JSON.stringify(selected));
    }
  }, [selected, language, property, dialectLanguage, dispatch]);

  return (
    <p
      onClick={() => setSelect(!selected)}
      style={{
        background: selected ? "purple" : "",
      }}
    >
      {property}
    </p>
  );
}
