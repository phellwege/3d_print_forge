import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => 
        props.theme.mode === 'dark' ? '#2a2a2e' : ''};
    color: ${props => 
        props.theme.mode === 'dark' ? '#b1b1b3' : '#111' };
    transition: ${props => 
        props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
}
h1 {
    color: ${props => 
        props.theme.mode === 'dark' ? 'white' : '#E4FDE1' };
}
h2 {
    color: ${props => 
        props.theme.mode === 'dark' ? '#E4FDE1' : '#111' };
}
.card {
    background-color: ${props => 
        props.theme.mode === 'dark' ? '#114B5F' : '#456990' };
    color: ${props => 
        props.theme.mode === 'dark' ? '#E4FDE1' : 'white' };
}

.cardInnerDiv {
    background-color: ${props =>
        props.theme.mode === 'dark' ? '#456990' : 'aliceblue'};
    color: ${props => 
        props.theme.mode === 'dark' ? 'white' : 'black' };
}
nav {
    box-shadow: ${props =>
        props.theme.mode === 'dark' ? '0 0 15px #E0AC9D' : '0 0 8px rgba(55,55,55,1)'};
    background-color: ${props =>
        props.theme.mode === 'dark' ? '#E0AC9D' : '#EAF2F8'};
    transition: ${props => 
        props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
};

nav li a:hover:not(.active) {
    background-color: ${props =>
        props.theme.mode === 'dark' ? '#E49A88' : '#5499C7'};
    color: ${props =>
        props.theme.mode === 'dark' ? 'black' : 'white'};
    border: ${props =>
        props.theme.mode === 'dark' ? '1px solid #E6BBAE' : '1px solid black'};
};
.menuNav.showMenu {
    border-top: ${props =>
        props.theme.mode === 'dark' ? '1px solid #E6BBAE' : '1px solid #E4FDE1'};
    border-right: ${props =>
        props.theme.mode === 'dark' ? '2px solid #E6BBAE' : '1px solid #E4FDE1'};
}
ul li a {
    color: ${props =>
        props.theme.mode === 'dark' ? 'black' : 'black'}
}
#nav li a {
    color: ${props =>
        props.theme.mode === 'dark' ? 'white' : 'black'};
}
.page_wrap a {
    color: ${props =>
        props.theme.mode === 'dark' ? '#1ABC9C' : '#222222'};
    text-shadow: ${props =>
        props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
}
.head_wrap {
    background-color: ${props => 
    props.theme.mode === 'dark' ? '#414341' : '#456990'};
    border-bottom: ${props => 
    props.theme.mode === 'dark' ? '2px solid #E0AC9D' : '2px solid #E4FDE1'};
}
#headspace {
    box-shadow: ${props =>
        props.theme.mode === 'dark' ? ' 0 2px 15px #1ABC9C' : ' 0 2px 15px royalblue'};
}
.menuNav {
    background: ${props =>
        props.theme.mode === 'dark' ? '#5C6D70' : '#7FBEEB'};
    color: ${props =>
        props.theme.mode === 'dark' ? 'black' : 'black'};
}

.pgNum {
    color: ${props =>
        props.theme.mode === 'dark' ? '#E0AC9D' : 'royalblue'};
}

#nightMoon {
    display: ${props =>
        props.theme.mode === 'dark' ? '' : 'none'};
    color: ${props =>
        props.theme.mode === 'dark' ? 'whitesmoke' : ''};
}
#daySun {
    display: ${props =>
        props.theme.mode === 'dark' ? 'none' : ''};
    color: ${props =>
        props.theme.mode === 'dark' ? '' : 'yellow'};
}

.lightboxWrap {
    border: ${props =>
        props.theme.mode === 'dark' ? '5px solid #114B5F' : '5px solid #456990'};
}
.lightboxCloseButton {
    color: ${props =>
        props.theme.mode === 'dark' ? '#E4FDE1' : 'black'};
}

:root {
    --swiper-theme-color: ${props =>
        props.theme.mode === 'dark' ? '#1ABC9C' : 'royalblue'};
}
};
`
export default GlobalStyle;