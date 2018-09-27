import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { HeaderWraper, 
        Logo, 
        Nav, 
        NavItem, 
        NavSearch, 
        Addition, 
        Button, 
        SearchWraper
    } from './style'

const Header = (props) => {
    return (
        <HeaderWraper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWraper>
                    <CSSTransition timeout={200} in={props.focused} classNames="slide">
                        <NavSearch className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
                </SearchWraper>
                
            </Nav>
            <Addition>
                <Button className="write">
                    <i className="iconfont">&#xe615;</i>
                    写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWraper>
    )
}


const mapStateToProps = (state) => {
    return {
        focused:state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            const action = {type:'searchFocus'}
            dispatch(action)
        },
        handleInputBlur(){
            const action = {type:'searchBlur'};
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)