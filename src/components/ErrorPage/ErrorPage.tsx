const ErrorPage = (props: any) => {
    const errorMessage: string = props.message;
    return <h2>{errorMessage}</h2>;
  };
  
export default ErrorPage;