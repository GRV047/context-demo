import ENVIRONMENT from "./environment";

const apiAtEndpoint = ENVIRONMENT.url;

const common = {
    adminCommon:apiAtEndpoint+'/admin'
}

const admin={
    logIn:common.adminCommon+'/login'
}

export {
    common,admin
}