// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const EMAIL_KEY = process.env.EMAIL_KEY;
    const TEMPLATE_KEY = process.env.TEMPLATE_KEY;
    const ACCOUNT_KEY = process.env.ACCOUNT_KEY;
    return {
      statusCode: 200,
      body: JSON.stringify({
        email: EMAIL_KEY,
        template: TEMPLATE_KEY,
        account: ACCOUNT_KEY,
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
