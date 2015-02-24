<%@page import="ksh.jspprj.dao.jdbc.JdbcNoticeFileDao"%>
<%@page import="ksh.jspprj.dao.NoticeFileDao"%>
<%@page import="ksh.jspprj.dao.NoticeFile"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="ksh.jspprj.dao.jdbc.JdbcNoticeDao"%>
<%@page import="ksh.jspprj.dao.NoticeDao"%>
<%@page import="ksh.jspprj.model.Notice"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	ServletContext ctx = request.getServletContext();
	String path = ctx.getRealPath("/customer/upload");
	out.println(path + "<br />");
	
	MultipartRequest req=new MultipartRequest(request
						, path
						, 1024*1024*10
						, "UTF-8"
						, new DefaultFileRenamePolicy());
	
	String title = req.getParameter("title");
   	String fileName = req.getFilesystemName("file");
   	String content = req.getParameter("content");
   /* 	out.println(path + "<br />");
   	out.println(path + "<br />");
   	out.println(path + "<br />"); */
	
  	/* String title = request.getParameter("title");
   	String file = request.getParameter("file");
   	String content = request.getParameter("content");*/
  	 
   	Notice n = new Notice();
   	n.setTitle(title);
   	n.setCode(fileName);
   	n.setContent(content);
   	n.setWriter("KSH");
   	
   	NoticeDao noticeDao = new JdbcNoticeDao();
   	noticeDao.insert(n);
   	
   	if(req.getFile("file") != null)
   	{	
	   	String noticeCode = noticeDao.lastCode();	/* notice에 구현 stub만 */
	   	
	   	NoticeFile noticeFile = new NoticeFile();
	   	noticeFile.setSrc(fileName);
	   	noticeFile.setDescription("");
	   	noticeFile.setNoticeCode(noticeCode);
	   	
	   	NoticeFileDao fileDao = new JdbcNoticeFileDao();
	   	fileDao.insert(noticeFile);
	   	//목록 페이지로 이동!
   	} 
   	response.sendRedirect("notice.jsp");
%>