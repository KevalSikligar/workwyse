export const FRONT_URI = 'http://localhost:5000';

// Article 

export const POST_ARTICLE = FRONT_URI + '/api/Article';
export const PUT_ARTICLE = FRONT_URI + '/api/Article';
export const GET_ALL_ARTICLE = FRONT_URI + '/api/Article/All';
// export const GET_ARTICLE_BY_ID = FRONT_URI + '/api/Article/' + `${articleId}`;

// Buyer

export const POST_FIND_BUYER = FRONT_URI + '/api/Buyer';
export const PUT_FIND_BUYER = FRONT_URI + '/api/Buyer';
export const POST_PROJECT_REQUEST = FRONT_URI + '/api/Buyer/ProjectRequest';
export const PUT_BUYER_TEMPLATE = FRONT_URI + '/api/Buyer/Template';

// Category

export const GET_ALL_CATEGORY = FRONT_URI + '/api/Category/All';
export const GET_CATEGORY_QUESTIONNAIRE = FRONT_URI + '/api/CategoryQuestionnaire/';


// Company 

// export const GET_COMPANY = FRONT_URI + '/api/Company/' + `${companyEmail}`;
export const PUT_COMPANY_LOCATION_SETTINGS = FRONT_URI + '/api/Company/LocationSettings';
export const PUT_COMPANY_STATUS = FRONT_URI + '/api/Company/Status';

// Industry 

export const GET_ALL_INDUSTRIES = FRONT_URI + '/api/Industry/All';
// Message

export const POST_MESSAGE = FRONT_URI + '/api/Message';
export const PUT_MESSAGE = FRONT_URI + '/api/Message';
// export const PUT_READ_MESSAGE = FRONT_URI + '/api/Message/Read/' + `${messageId}`;
// export const GET_MESSAGE_PROJECT_ID = FRONT_URI + '/api/Message/Project/' + `${projectId}`;
// export const GET_MESSAGE_USER_ID = FRONT_URI + '/api/Message/User/' + `${userId}`;

// Notification


export const PUT_NOTIFICATION = FRONT_URI + '/api/Notification';
// export const GET_NOTIFICATION_COMPANY_ID = FRONT_URI + '/api/Notification/' + `${companyId}`;
export const GET_ALL_NOTIFICATION = FRONT_URI + '/api/Notification/All';

// Project



export const POST_PROJECT = FRONT_URI + '/api/Project';
export const POST_PROJECT_SELLER = FRONT_URI + '/api/Project/Seller/Add';
// export const GET_PROJECT_BUYER_ID = FRONT_URI + '/api/Project/Buyer/' + `${buyerId}`;
// export const GET_PROJECT_ID = FRONT_URI + '/api/Project/' + `${projectId}`;
// export const GET_PROJECT_SERVICE_ID = FRONT_URI + '/api/Project/Service/Ids';
// export const GET_PROJECT_SELLER_ID = FRONT_URI + '/api/Project/Sellers/' + `${projectId}`;
// export const PUT_RPOJECT_STATUS = FRONT_URI + '/api/Project/Status/{projectId}/' + `${statusId}`;
// export const GET_BUYER_DETAILS = FRONT_URI + '/api/Project/BuyerDetails/' + `${projectId}`;
export const GET_PROJECT_HIRE_TYPE = FRONT_URI + '/api/ProjectHireType/All';
export const GET_PROJECT_TYPE_ALL = FRONT_URI + '/api/ProjectType/All';


// Review

export const POST_REVIEW = FRONT_URI + '/api/Review';
export const PUT_REVIEW = FRONT_URI + '/api/Review';
// export const GET_REVIEW_BUYER = FRONT_URI + '/api/Review/Buyer/' + `${buyerId}`;
// export const GET_REVIEW_SELLER = FRONT_URI + ' /api/Review/Seller/' + `${sellerId}`;

// Seller
export const POST_SELLER = FRONT_URI + '/api/Seller';
export const PUT_SELLER = FRONT_URI + '/api/Seller';
export const POST_SELLER_PROJECT_REQUEST = FRONT_URI + '/api/Seller/ProjectRequest';
export const PUT_SELLER_SERVICES = FRONT_URI + '/api/Seller/Services';
export const PUT_SELLER_TEMPLATE = FRONT_URI + '/api/Seller/Template';
export const GET_SELLER_PURCHASED_LEADS = FRONT_URI + '/api/Seller/PurchasedLeads';

// Tag

export const GET_TAG = FRONT_URI + '/api/Tag/All';

// User 

export const POST_USER_RESET_PASSWORD = FRONT_URI + '/api/User/ResetPassword';
export const POST_USER_ADDRESS = FRONT_URI + '/api/UserAddress';
export const PUT_USER_ADDRESS = FRONT_URI + '/api/UserAddress';

