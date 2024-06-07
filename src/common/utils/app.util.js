import moment from "moment";
import { v4 as uuid } from "uuid";
import task_statuses from "../../assets/options/task_statuses.json";

export function add(x, y) {
  return x + y;
}

// Setting "YYYY-MM-DD" because server response is in this specified format.
export function getFormattedDateTime(date = "", format = "YYYY-MM-DD") {
  return date ? moment(date).format(format) : "";
}

export function setDateTimeFormat(date = "", format = "DD-MM-YYYY") {
  return moment(date, format).toDate();
}

// Function to get Date Difference
export const getDateDifference = (date_one, date_two) => {
  const a = moment(date_two);
  const b = moment(date_one);
  let years = a.diff(b, 'year');
  b.add(years, 'years');
  let months = a.diff(b, 'months');
  b.add(months, 'months');
  let days = a.diff(b, 'days');
  let final = `${(years > 0) ? years + " " + appendS(years, "year") : ""} ${(months > 0) ? months + " " + appendS(months, "month") : ""} ${(days > 0) ? days + " " + appendS(days, "day") : ""}`;
  return final;
}

// Append's an S to a string if the first argument is greater then 1
export const appendS = (num, str) => {
  if (num > 1) {
    str = str + "s";
  }
  return str
}

export function addToDate(type = "days", value = 0) {
  const today = moment().toDate();
  const finalDate = moment(moment(today).add(value, type));
  return finalDate;
}

export const scrollToTop = (top = 0, behavior = "smooth") => {
  window.scrollTo({
    top: top,
    behavior: behavior,
  });
};

export const applyClassToBody = (str) => {
  const flag = document.body.classList.contains(str);
  if (!flag) {
    document.body.className += " " + str;
  }
};

export const addOrRemoveClass = (id, classname) => {
  const elements = document.getElementsByName(id);
  if (elements.length > 0) {
    elements.forEach((element) => {
      element.classList.toggle(classname);
    });
  }
};

export const checkPageWidthGT = (width = 560) => {
  const vw = document.documentElement.clientWidth;
  if (vw > width) {
    return true;
  }
  return false;
};

export const getUrlQueryParam = (query = "") => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let res = params.get(query);
  return res;
};



export const capitalizeFirstLetter = (str) => {
  if (str === "") {
    return "";
  }
  let capitalized;
  if (isNaN(str)) {
    capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    capitalized = str;
  }
  return capitalized;
};

export const getFormattedString = (string) => {
  if (string === "") {
    return "";
  }
  let str = string.replaceAll("-", " ").replaceAll("_", " ");
  let arr = str.split(" ").filter(Boolean);
  let name = "";
  arr.map((item) => {
    name = name + " " + capitalizeFirstLetter(item);
  });
  return name;
};

export const deleteRowFromArry = (arr, index, noi) => {
  let array = arr;
  if (index > -1) { // only splice array when item is found
    array.splice(index, noi); // 2nd parameter means remove one item only
  }
  return array;
}

export const getTaskColumsForDND = () => {
  let statuses = null;
  task_statuses.map((item, i) => {
    statuses = {
      ...statuses,
      [uuid()]: {
        name: item.lable,
        items: [],
      }
    }
  });
  return statuses;
}

export const getConcatenatedArrayByAttribute = (array = [], attribueName = "", concatenatedBy = ",") => {
  return array.map(item => item[attribueName]).join(concatenatedBy);
}

export const bodyHasClass = (className) => {
  const flag = document.body.classList.contains(className);
  return flag
};
export const toggleBodyClass = (className) => {
  document.body.classList.toggle(className);
};

