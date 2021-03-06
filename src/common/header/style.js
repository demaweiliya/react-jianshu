import styled from 'styled-components'
import logoPic from '../../statics/image/logo.png'


export const HeaderWraper = styled.div`
    height:58px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`

export const Logo = styled.a.attrs({
    href:'/'
})`
    height:56px;
    position:absolute;
    left:0;
    top:0;
    display:block;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
    margin-left:200px;
`


export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
`

export const NavItem = styled.div`
    line-height:56px;
    font-size:17px;
    padding: 0 15px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color: #ea6f5a
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    padding: 0 20px;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width:240px;
    }
`

export const Addition = styled.div`
    position:absolute;
    right:0
    top:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    border:1px solid #ec6149
    &.reg {
        color: #ec6149
    }
    &.write {
        color: #fff;
        background: #ec6149;
    }
`

export const SearchWraper = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:240px;

    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exite-active{
        width:160px;
    }
    .iconfont {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        display:inline-block;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }

`



