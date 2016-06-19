import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

/*ReactDOM.render(
     <App/>, //App 必须和模版抛出的名字一样
     document.getElementById('app')
	);*/

/*ReactDOM.render(
     <h1>Hellow World!</h1>,
     document.getElementById('example')
	);*/

	/*ReactDOM.render(
         <div>
         <h1>菜鸟教程</h1>
         <h2>欢迎学习React</h2>
         <p>这是一个很不错的 Javasript 库！</p>
         </div>,
         document.getElementById('example')
		);
*/

/*
    var i=1;
    ReactDOM.render(
         //<h1>{1+1}</h1>,
         <h1>{i=1?'True!':'False'}</h1>,
        document.getElementById('example3')
        );*/

  /*  
    var myStyle={
    fontSize:100,
    color:'#ff0000'
    };

    ReactDOM.render(
         <h1 style={myStyle}>洋码头</h1>,
         document.getElementById('example3')
        );*/



       /* var arr=[<h1>我</h1>,<h2>学的不是技术，是梦想！</h2>]
         ReactDOM.render(
         <p>{arr}</p>,
         document.getElementById('example3')
        );*/


       /*   var $div=<div className="foo"/>
          ReactDOM.render(
               $div,
               document.getElementById('example3')
            );
*/



      //渲染react组件(组件名开始字母为大写)
      /*ar HelloMessage=React.createClass({
       render:function(){
         return <h1>hi {this.props.name}</h1>;
       }
      });

      ReactDOM.render(
      <HelloMessage name="洋码头"/>,
      document.getElementById('example3')
      );*/


    /*  var WebSite=React.createClass({
         render:function(){
           return(<div>
           <Name name={this.props.name}/>
           <Link site={this.props.site}/>
            </div>
            );
         }
      });

      var Name=React.createClass({
         render:function(){
            return(
             <h1>{this.props.name}</h1>
            );
         }

      });

      var Link=React.createClass({
         render:function(){
            return(
             <a href={this.props.site}>
                 {this.props.site}
             </a>
            );
         }
      });

      ReactDOM.render(
      <WebSite name="fdb" site="http://www.runoob.com"/>,
      document.getElementById('example3')
      );*/




      var LikeButton=React.createClass({
          getInitialState:function(){
            return {liked:false};
          },
          handleClick:function(){
            this.setState({liked:!this.state.liked});
          },
          render:function(){
            var text=this.state.liked?'喜欢':'不喜欢';
            return (
              <p onClick={this.handleClick}>
               你<b>{text}</b>我。点我切换状态。
              </p>
              );
          }
      })

      ReactDOM.render(
        <LikeButton/>,
        document.getElementById('example3')
        )