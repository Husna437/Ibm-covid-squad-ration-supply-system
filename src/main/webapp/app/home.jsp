<%@page import="com.ibm.gtslabs.cartridgestudio.model.StudioUserWebToken" %>
<%
String  userWebToken =(String) request.getAttribute("studio.user.web.token");
System.out.println("in jsp user webtoken "+userWebToken);
if(userWebToken == null){
	//redirect through controller
	System.out.println("redirecting request to controller"+userWebToken);
	request.getRequestDispatcher("/").forward(request,response);
}

%>
<%@ include file="index.html" %>