import gender_options from "../../assets/options/gender_options.json";
import page_size_options from "../../assets/options/page_size_options.json";
import countries from "../../assets/options/countries.json";
import task_statuses from "../../assets/options/task_statuses.json"
import industries from "../../assets/options/industries.json"


export const get_gender_options = () => {
    return gender_options;
}

export const get_page_size_options = () => {
    return page_size_options;
}

export const get_country_options = (filter_by_continent) => {
    if (filter_by_continent) {
        return countries.filter((item => item.continent_code === filter_by_continent))
    }
    return countries;
}

export const get_industries_sub_categories = (filter_by_industry) => {
    let sub_categories = [];
    if (filter_by_industry) {
        let found =  industries.find((item => item.industry === filter_by_industry));
        if(found){
            sub_categories =  found.sub_category;
            console.log("awas",found);
        }
    }
    return sub_categories;
}



export const get_all_task_statues = () => {
    return task_statuses;
}