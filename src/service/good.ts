import requerst from "../utils/request";

// 详情
export let goodDetail = (params: object) => {
     return requerst.get("/goods/detail", {params});
};

// 详情中的大家都在看
export let goodLook = (params: object) => {
    return requerst.get("/goods/related", {params});
};