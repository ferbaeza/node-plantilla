import {
    OK, CREATED, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, CONFLICT, INTERNAL_SERVER_ERROR
} from './ApiResponseCodes.js';

const handlerHttpResponse =(res, data, message, status)=>{
    const response = {data, message, status};
    return res.status(status).json(response);
}

class ApiResponse {

    static Ok(res, data, message){
        return handlerHttpResponse(res, data, message, OK);
    }

    static Created(res, data, message){
        return handlerHttpResponse(res, data, message, CREATED);
    }

    static NoContent(res, data, message){
        return handlerHttpResponse(res, data, message, NO_CONTENT);
    }

    static BadRequest(res, data, message){
        return handlerHttpResponse(res, data, message, BAD_REQUEST);
    }

    static Unauthorized(res, data, message){
        return handlerHttpResponse(res, data, message, UNAUTHORIZED);
    }

    static Forbidden(res, data, message){
        return handlerHttpResponse(res, data, message, FORBIDDEN);
    }

    static NotFound(res, data, message){
        return handlerHttpResponse(res, data, message, NOT_FOUND);
    }

    static Conflict(res, data, message){
        return handlerHttpResponse(res, data, message, CONFLICT);
    }

    static Error(res, data, message){
        return handlerHttpResponse(res, data, message, INTERNAL_SERVER_ERROR);
    }
}

export { ApiResponse };