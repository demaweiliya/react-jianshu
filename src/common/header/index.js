import React,{ Component } from 'react';
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


class Header extends Component {
   
    render(){
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
                        <CSSTransition timeout={200} in={this.props.focused} classNames="slide">
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                    onFocus={this.props.handleInputFocus}
                                    onBlur={this.props.handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6e4;</i>
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