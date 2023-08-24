import { styled }from "styled-components";

const Layout = ({ children, className }) => {
	return (
  	<div className={className}>
    	{children}
    </div>
  );
}

export default styled(Layout)`
	min-height: 100vh;
	background-color: #14213d;
	color: #ffffff;
`;