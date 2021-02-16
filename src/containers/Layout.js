//components
import Wrapper from '../components/styled/Wrapper';
import Header from '../components/styled/Header';
import Footer from '../components/styled/Footer';
import {MediumButton} from '../components/styled/Button';

const Layout = (props)=>{
	return(
		<Wrapper>
			<Header>
				<a href="/" className="logo">Containers &amp; Clusters</a>
				<MediumButton bgcolor="#000">Sign In</MediumButton>
			</Header>
			{props.children}
			<Footer>Copyright &copy; 2021, Containers &amp; Clusters All Rights Reserved.</Footer>
		</Wrapper>)
};

export default Layout;