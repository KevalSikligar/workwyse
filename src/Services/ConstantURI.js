const FRONT_URI = 'http://localhost:5000';

// Article 

const articleId;

const POST_ARTICLE = FRONT_URI + '/api/Article';
const PUT_ARTICLE = FRONT_URI + '/api/Article';
const GET_ALL_ARTICLE = FRONT_URI + '/api/Article/All';
const GET_ARTICLE_BY_ID = FRONT_URI + '/api/Article/' + `${articleId}`;

// Buyer
const POST_FIND_BUYER = FRONT_URI + '/api/Buyer';
const PUT_FIND_BUYER = FRONT_URI + '/api/Buyer';
const POST_PROJECT_REQUEST = FRONT_URI + '/api/Buyer/ProjectRequest';
const PUT_BUYER_TEMPLATE = FRONT_URI + '/api/Buyer/Template';

// Category
const categoryId;

const GET_CATEGORY = FRONT_URI + '/api/Category/All';
const GET_CATEGORY_QUESTIONNAIRE = FRONT_URI + '/api/CategoryQuestionnaire/' + `${categoryId}`;


// Company 
const companyEmail;

const GET_COMPANY = FRONT_URI + '/api/Company/' + `${companyEmail}`;
const PUT_COMPANY_LOCATION_SETTINGS = FRONT_URI + '/api/Company/LocationSettings';
const PUT_COMPANY_STATUS = FRONT_URI + '/api/Company/Status';


// Message

const messageId;
const projectId;
const userId;

const POST_MESSAGE = FRONT_URI + '/api/Message';
const PUT_MESSAGE = FRONT_URI + '/api/Message';
const PUT_READ_MESSAGE = FRONT_URI + '/api/Message/Read/' + `${messageId}`;
const GET_MESSAGE_PROJECT_ID = FRONT_URI + '/api/Message/Project/' + `${projectId}`;
const GET_MESSAGE_USER_ID = FRONT_URI + '/api/Message/User/' + `${userId}`;

// Notification

const companyId

const PUT_NOTIFICATION = FRONT_URI + '/api/Notification';
const GET_NOTIFICATION_COMPANY_ID = FRONT_URI + '/api/Notification/' + `${companyId}`;
const GET_ALL_NOTIFICATION = FRONT_URI + '/api/Notification/All';

// Project

const buyerId;
const statusId;

const POST_PROJECT = FRONT_URI + '/api/Project';
const POST_PROJECT_SELLER = FRONT_URI + '/api/Project/Seller/Add';
const GET_PROJECT_BUYER_ID = FRONT_URI + '/api/Project/Buyer/' + `${buyerId}`;
const GET_PROJECT_ID = FRONT_URI + '/api/Project/' + `${projectId}`;
const GET_PROJECT_SERVICE_ID = FRONT_URI + '/api/Project/Service/Ids';
const GET_PROJECT_SELLER_ID = FRONT_URI + '/api/Project/Sellers/' + `${projectId}`;
const PUT_RPOJECT_STATUS = FRONT_URI + '/api/Project/Status/{projectId}/' + `${statusId}`;
const GET_BUYER_DETAILS = FRONT_URI + '/api/Project/BuyerDetails/' + `${projectId}`;
const GET_PROJECT_HIRE_TYPE = FRONT_URI + '/api/ProjectHireType/All';
const GET_PROJECT_TYPE_ALL = FRONT_URI + '/api/ProjectType/All';


// Review
const sellerId;

const POST_REVIEW = FRONT_URI + '/api/Review';
const PUT_REVIEW = FRONT_URI + '/api/Review';
const GET_REVIEW_BUYER = FRONT_URI + '/api/Review/Buyer/' + `${buyerId}`;
const GET_REVIEW_SELLER = FRONT_URI + ' /api/Review/Seller/' + `${sellerId}`;

// Seller
const POST_SELLER = FRONT_URI + '/api/Seller';
const PUT_SELLER = FRONT_URI + '/api/Seller';
const POST_SELLER_PROJECT_REQUEST = FRONT_URI + '/api/Seller/ProjectRequest';
const PUT_SELLER_SERVICES = FRONT_URI + '/api/Seller/Services';
const PUT_SELLER_TEMPLATE = FRONT_URI + '/api/Seller/Template';
const GET_SELLER_PURCHASED_LEADS = FRONT_URI + '/api/Seller/PurchasedLeads';

// Tag

const GET_TAG = FRONT_URI + '/api/Tag/All';

// User 

const POST_USER_RESET_PASSWORD = FRONT_URI + '/api/User/ResetPassword';
const POST_USER_ADDRESS = FRONT_URI + '/api/UserAddress';
const PUT_USER_ADDRESS = FRONT_URI + '/api/UserAddress';

