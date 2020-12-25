import { getUserDetail } from "../../const";
import {
    GET_POST_A_PROECT_QUESTIONS_ERROR,
    GET_POST_A_PROECT_QUESTIONS_SUCCESS,
    CLEAR_ALL_DATA,
    SEND_PROJECT_ID_TO_DASHBOARD,
    CLEAR_PROJECT_DATA
} from "../action/PostAProject/PostAProject";

const initialState = {
    postAProject: [],
    projectId: '',
    posttitle: '',
    uploadLink: []
};

const postAProjectMap = {
    [GET_POST_A_PROECT_QUESTIONS_SUCCESS]: (state, action) => {
        return {
            ...state,
            // postAProject: action.payload,
            [action.key]: action.payload
        }
    },
    [GET_POST_A_PROECT_QUESTIONS_ERROR]: (state, action) => {
        return {
            ...state,
            postAProject: action.payload
        }
    },
    [SEND_PROJECT_ID_TO_DASHBOARD]: (state, action) => {
        return {
            ...state,
            projectId: action.payload
        }
    },
    [CLEAR_ALL_DATA]: (state, action) => {
        return {
            ...state,
            id: null,
            businessType: 2,
            companyType: getUserDetail('roles') === 'Buyer' ? 1 : 2,
            companyEmail: null,
            companyName: '',
            companyContactNumber: '',
            companySize: '',
            operationScale: '',
            tagline: '',
            description: '',
            logoPath: null,
            tradingAs: '',
            distance: 50,
            latitude: '',
            longitude: '',
            title: '',
            forfetch: '',
            trustpilotConnectedUrl: '',
            glassdoorConnnectedUrl: '',
            connectFacebookBusinessUrl: '',
            active: false,
            buyerTemplate: '',
            sellerTemplate: '',
            industryId: null,
            industryName: '',
            companyUserId: 0,
            jobTitle: '',
            userDto: {
                id: '',
                foreName: '',
                surName: '',
                phoneNumber: '',
                email: '',
                password: '',
                photoPath: null,
            },
        }
    },
    [CLEAR_PROJECT_DATA]: (state, action) => {
        return {
            ...state,
            id: 0,
            buyerId: '',
            buyerName: '',
            categoryId: '',
            categoryName: '',
            tagId: '',
            projectTypeId: '',
            projectHireTypeId: '',
            projectStatusId: '',
            industryId: '',
            paid: true,
            title: '',
            forfetch: '',
            monthly: '',
            description: '',
            uploadLink: [],
            oneOffRate: '',
            monthlyRate: '',
            hourlyStartRate: '',
            hourlyEndRate: '',
            startDate: '',
            endDate: '',
            distance: '',
            latitude: '',
            longitude: '',
            location: '',
            questionnaires: '',
            buyerEmail: '',
            buyerContactNumber: '',
            foreName: '',
            surName: '',
            companySize: '',
            operationScale: '',
            email: '',
            phoneNumber: '',
            password: '',
            asap: '',
            unSure: ''
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = postAProjectMap[action.type];
    return fn ? fn(state, action) : state;
}