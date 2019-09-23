import requerst from "../utils/request";

// 请求专题列表
export let topic = (params: object) => {
     return requerst.get("/topic/list",{params});
};

// 专题详情
export let topicDetail = (params:any) => {
    return requerst.get('/topic/detail',{params});
};