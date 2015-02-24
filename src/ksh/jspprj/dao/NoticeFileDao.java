package ksh.jspprj.dao;

import java.util.List;

public interface NoticeFileDao {
	public List<NoticeFile> getNoticeFiles(String NoticeCode);
	public int insert(NoticeFile file);
}
