const requestSignUp = async state => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { status: 'SUCCESS' };
};

export { requestSignUp };
