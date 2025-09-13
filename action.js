setTimeout(() => {
	const sidebar = document.querySelector(".x1xgvd2v");
	const chatBox = document.querySelector(
		"div.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x9f619.xjbqb8w.x78zum5.x15mokao.x1ga7v0g.x16uus16.xbiv7yw.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x3h4tne.x145d82y.xixxii4"
	);

	if (sidebar) {
		sidebar.remove();
		console.log("Sidebar eliminada");
	}

	if (chatBox) {
		chatBox.remove();
		console.log("Chatbox eliminada");
	}
}, 400);
