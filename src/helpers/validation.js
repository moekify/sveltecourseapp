export function isEmpty(val) {
  return val.trim().length === 0;
}

export function isEmail(val) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(val).toLowerCase());
}

export function isUrl(val) {
  const r = /^(ftp|http|https):\/\/[^ "]+$/;
  return r.test(val);
}

export function isLongEnough(val) {
  return val.trim().length > 10;
}
