export function getVersion({ model }: EamuseInfo) {
  const dateCode = parseInt(model.split(":")[4]);

  if (model.startsWith("H44")) return 1;
  if (model.startsWith("I44")) return 2;
  if (model.startsWith("J44")) return 3;
  if (model.startsWith("K44")) return 4;
  if (model.startsWith("L44")) {
    if (dateCode >= 2012082400 && dateCode <= 2014022400) return 5;
    if (dateCode >= 2014030303 && dateCode <= 2014121802) return 6;
    if (dateCode >= 2015030300 && dateCode <= 2016022300) return 7;
    if (dateCode >= 2016031700 && dateCode <= 2017062100) return 8;
    if (dateCode >= 2017062800 && dateCode <= 2018042400) return 9;
    if (dateCode >= 2018042500 && dateCode <= 2020030300) return 10;
    if (dateCode >= 2020030400 && dateCode <= 2023030800) return 11;
    if (dateCode >= 2023030900) return 12;
    return 0;
  }

  return 0;
}

export function getVersionName({ model }: EamuseInfo) {
  const dateCode = parseInt(model.split(":")[4]);

  if (model.startsWith("H44")) return "jubeatog";
  if (model.startsWith("I44")) return "ripples";
  if (model.startsWith("J44")) return "knit";
  if (model.startsWith("K44")) return "copious";
  if (model.startsWith("L44")) {
    if (dateCode >= 2012082400 && dateCode <= 2014022400) return "saucer";
    if (dateCode >= 2014030303 && dateCode <= 2014121802) return "fulfill";
    if (dateCode >= 2015030300 && dateCode <= 2016022300) return "prop";
    if (dateCode >= 2016031700 && dateCode <= 2017062100) return "qubell";
    if (dateCode >= 2017062800 && dateCode <= 2018042400) return "clan";
    if (dateCode >= 2018042500 && dateCode <= 2020030300) return "festo";
    if (dateCode >= 2020030400 && dateCode <= 2023030800) return "avenue";
    if (dateCode >= 2023030900) return "beyond";
    return null;
  }

  return null;
}

export function VersionRange(version: number, start: number, end: number = -1) {
  if (end === -1) return version >= start;
  return version >= start && version <= end;
}
