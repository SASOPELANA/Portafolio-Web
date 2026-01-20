import ingles from "./en.json";
import spanish from "./es.json";
import portugues from "./pt-br.json";

const LENGUAGES = {
  SPANISH: "es",
  INGLES: "en",
  PORTUGUES: "pt-br",
};

export const getI18n = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  switch (currentLocale) {
    case LENGUAGES.INGLES:
      return ingles;
    case LENGUAGES.SPANISH:
      return spanish;
    case LENGUAGES.PORTUGUES:
      return portugues;
    default:
      return spanish;
  }
};
