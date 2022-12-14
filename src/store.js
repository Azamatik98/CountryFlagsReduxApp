import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

import * as api from "./config";
import { controlsReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";
import { themeReducer } from "./features/theme/theme-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
