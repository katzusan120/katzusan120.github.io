$.expr[':'].random = function(a, i, m, r) {
    if (i == 0) {
        this.random = Math.floor(Math.random() * m.length);
    }
    return i == this.random;
};
$(function() {
	var Kns = {};
	Kns.layer  = [0, 1, 3, 5, 6, 4, 2, 7, 8, 9, 10];
	Kns.order  = [[0, 1], 3, 9, 2, [7, 8, 10], [5, 6], 4];
	Kns.result = [0, 1, 5, 6, 3, 2, 4, 7, 8, 9, 10];
	Kns.info   = [
		/* 0 */ {url: "bazoj",
		name: "Основной цвет",
		palette: 1},
		/* 1 */ {url: "okuloj",
		name: "Глаза",
		palette: 2},
		/* 2 */ {url: "strioj/kapo",
		name: "Морда",
		info: {1: "Полоски", 11: "Пятна", 21: "Мордочка", 31: "Пятна вокруг глаз", 41: "Бородка", 51: "Маска на глаза", 61: "Брызги", 71: "Полосы", 81: "Подбородок", 91: "Линия на носу с полосками", 101: "Нос", 111: "Морда", 121: "Полоска на щеке", 131: "Линия на носу"}},
		/* 3 */ {url: "strioj/trunko",
		name: "Спина",
		info: {1: "Полоски", 11: "Пятнышки", 21: "Полосы", 31: {name: "Пятна", palette: 3}, 42: "Ремень", 52: "Мраморные пятна", 62: "Клякса", 72: "Брызги", 82: {name: "Чепрак", palette: 5}}},
		/* 4 */ {url: "strioj/vosto",
		name: "Хвост",
		info: {1: "Пятнышки и крапинки", 29: "Кисточка", 30: "Кончик", 31: "Полосы", 32: "Полосы и кончик", 33: "Крапинки", 34: "Пятнышки", 35: "Пятна", 36: "Половина хвоста", 37: "Весь хвост", 102: "Полоска на хвосте", 112: "Полоска на кончике хвоста", 122: "Брызги", 132: "Кончик хвоста с пятнами", 142: {name: "Пёстрые хвосты", palette: 6}}},
		/* 5 */ {url: "strioj/lkruro",
		name: "Левая лапа",
		info: {1: "Пятна", 11: "Носочек", 21: "Лапа", 31: "Чулок", 41: "Брызги", 51: "Полосы", 61: "Полосы с носочком", 71: "Пятна с носочком"}},
		/* 6 */ {url: "strioj/pkruro",
		name: "Правая лапа",
		info: {1: "Пятна", 11: "Носочек", 21: "Лапа", 31: "Чулок", 41: "Брызги", 51: "Полосы", 61: "Полосы с носочком", 71: "Пятна с носочком"}},
		/* 7 */ {url: "strioj/lorelo",
		name: "Левое ухо",
		info: {1: "Ухо", 11: {name: "Кончик уха", palette: 4}}},
		/* 8 */ {url: "strioj/porelo",
		name: "Правое ухо",
		info: {1: "Ухо", 11: "Кончик уха"}},
		/* 9 */ {url: "strioj/brusto",
		name: "Грудь",
		info: {1: "Грудь", 11: "Грудь и живот", 21: "Пушистая грудка"}},
		/* 10*/ {url: "strioj/hartufo",
		name: "Кисточки",
		palette: 5},
	];
	Kns.palette = [
		{"#FFFFFF": "Не выделяется", "#E6E6E6": "Белый", "#414141": "Чёрный", "#F8A94B": "Рыжий", "#B8B8B8": "Серый", "#754F2A": "Бурый", "#F2CA50": "Жёлтый", "#F38D4F": "Тёмно-рыжий", "#707070": "Тёмно-серый", "#E8CBA2": "Кремовый", "#374F64": "Серо-голубой"},
		{'': '', "#E6E6E6": "Белый", "#414141": "Чёрный", "#F8A94B": "Рыжий", "#B8B8B8": "Серый", "#754F2A": "Бурый", "#F2CA50": "Жёлтый", "#F38D4F": "Тёмно-рыжий", "#707070": "Тёмно-серый", "#E8CBA2": "Кремовый", "#374F64": "Серо-голубой"},
		{"#2CCFF1": "Голубой", "#6CFF00": "Зелёный", "#E8E513": "Жёлтый", "#D99900": "Янтарный", "#0042FF": "Синий", "#6E3200": "Карий", "#5BA6AB": "Бирюзовый", "#96704C": "Медный", "#B7CB67": "Оливковый", "#9A9A9A": "Серый", "#68964C": "Тёмно-зелёный"},
		{"#FFFFFF": "Не выделяется", "#E6E6E6": "Белый", "#414141": "Чёрный", "#F8A94B": "Рыжий", "#B8B8B8": "Серый", "#754F2A": "Бурый", "#F2CA50": "Жёлтый", "#F38D4F": "Тёмно-рыжий", "#707070": "Тёмно-серый", "#E8CBA2": "Кремовый", "#374F64": "Серо-голубой", "#FFBF5F": "Трёхцветный"},
		{"#FFFFFF": "Не выделяется", "#E6E6E6": "Белый", "#E6E6E7": "Белый (другой вариант)", "#414141": "Чёрный", "#F8A94B": "Рыжий", "#B8B8B8": "Серый", "#754F2A": "Бурый", "#F2CA50": "Жёлтый", "#F38D4F": "Тёмно-рыжий", "#707070": "Тёмно-серый", "#E8CBA2": "Кремовый", "#374F64": "Серо-голубой"},
		{"#FFFFFF": "Не выделяется", "#414141": "Чёрный"},
		{"#FFFFFF": "Не выделяется", "#F38D4F": "Пёстрый", "#F38D4E": "Пёстрый (другой вариант)"}
	];
	
	Kns.start = function() {
		Kns.drawCat();
		Kns.drawSelect();
		$(".edit0").click();
	};
	Kns.code = function() {
		var code = [];
		for (var i = 0; i < Kns.result.length; i++) {
			code.push(main[Kns.result[i]]);
		}
		code = code.join(" ");
		return code;
	};
	Kns.drawCat = function() {
		var html = "", html_piece = "";
		var deys = [0, 1, 4, 5, 8];
		for (var dey = 0; dey < deys.length; dey++) {
			var d = deys[dey];
			for (var i = Kns.layer.length - 1; i >= 0; i--) {
				var n = Kns.layer[i];
				var file = (n == 0 ? 1 : 0);
				var folder = Kns.info[n].url.split("/");
				if (folder.length == 2) {
					folder = folder[1];
				} else {
					folder = folder[0];
				}
				var exp = 'gif';
				if (d == 0 || (d == 1 && ['lkruro', 'pkruro', 'vosto', 'kapo'].indexOf(folder) != -1)) {
					exp = 'png';
				}
				html_piece = '<div class="bottd" style="background-image:url(\'koloroj/' + d + '/' + Kns.info[n].url + '/' + file + '.' + exp + '\');background-size:100%;background-repeat:no-repeat" data-num="' + n + '">' + html_piece + '</div>';
			}
			html += "<td>" + html_piece + "</td>";
			html_piece = "";
		}
		html = "<table><tr>" + html + "</tr></table>";
		$("#cat").html(html);
	};
	Kns.drawSelect = function() {
		html = "";
		for (var i = 0; i < Kns.order.length; i++) {
			var all_n = Kns.order[i];
			if (!(all_n instanceof Array)) {
				all_n = [all_n];
			}
			html += '<td valign="top"><table border="1">';
			for (var j = 0; j < all_n.length; j++) {
				var n = all_n[j];
				html += '<tr><td><b>' + Kns.info[n].name + '</b></td></tr>';
				if (Kns.info[n].info) {
					for (var id in Kns.info[n].info) {
						var name2 = Kns.info[n].info[id];
						if (typeof name2 === "object") {
							name2 = name2.name;
						}
						html += '<tr><td><a class="edit' + n + '" id="' + id + '" href="#">' + name2 + '</a></td></tr>';
					}
				} else {
					html += '<tr><td><a class="edit' + n + '" id="1" href="#">Выбрать</a></td></tr>';
				}
			}
			html += '</table></td>';
		}
		html = '<table border="0"><tr>' + html + '</tr></table>';
		$("#select").html(html);
	};
	
	$("#sbm").on("click", function() {
		alert("Сохранение не работает потому что я поел бутерброд");
		/* if (confirm("Вы уверены, что хотите именно этот окрас? Его больше никогда нельзя будет сменить.")) {
			$.post("kns_pcs", {code: Kns.code()}, function(data) {
				$("body").html(data);
				$("#cat").html(Func.showCat($("#cat").text())).show();
			}); */
		}
	);
	
	var main = new Array(Kns.info.length);
	main[0] = 1;
	for (var i = 1; i < Kns.info.length; i++) {
		main[i] = 0;
	}
	var now = 0, nowSelected = 1;
	
	function replace(what, im) {
		$("#cat [data-num=" + what + "]").each(function() {
			var now = $(this).css("background-image");
			now = now.split("/");
			now[0] = 'url("http:';
			now[now.length-1] = now[now.length-1].replace(parseInt(now[now.length-1]), im).replace(")", '")').replace('"")', '")');
			now = now.join("/");
			$(this).css("background-image", now);
		});
		main[what] = im;
	}
	$("body").on("click", "[class^=edit]", function(e) {
		e.preventDefault();
		var cl = parseInt($(this).attr('class').replace('edit', ''));
		var id = $(this).attr('id');
		now = cl;
		nowSelected = id;
		$(".sel").removeClass('sel');
		$(this).addClass('sel');
		var html = '<table border="1"><tr>';
		var p;
		try {p = Kns.info[cl].info[id].palette;} catch(e) {}
		p = p || Kns.info[cl].palette || 0;
		var n = 0;
		for (var i in Kns.palette[p]) {
			n++;
			if (i == '') {
				continue;
			}
			html += '<td bgcolor="' + i + '" title="' + Kns.palette[p][i] + '" data-num="' + (n - 1) + '"> </td>';
		}
		html += '</tr></table>';
		$("#color").html(html);
		$("[title]").tipTip();
	});
	$("#color").on("click", function(e) {
		var num = $(e.target).data('num');
		nowSelected = +nowSelected;
		if (num > 0) {
			if ((now == 7 || now == 8) && nowSelected == 1) {
				if (num == 5) {
					num = 1;
				} else if (num == 1) {
					num = 5;
				}
			} else if (now == 4 && nowSelected > 2 && nowSelected <= 37) {
				if (num <= 3 || num == 5) {
					switch (num) {
						case 1:
							num = nowSelected;
							break;
						case 2:
							num = nowSelected + 9;
							break;
						case 3:
							num = nowSelected - 9;
							break;
						case 5:
							num = nowSelected - 18;
							break;
					}
				} else {
					var temp = (nowSelected - 29) * 6 + 48;
					if (num > 4) {
						temp += num - 5;
					}
					num = temp;
				}
			} else if ((now == 2 && nowSelected == 21) || ((now == 5 || now == 6) && nowSelected == 11)) {
				if (num == 5) {
					num = nowSelected;
				} else if (num < 5) {
					num = nowSelected + num;
				} else if (num > 5) {
					num = nowSelected - 1 + num;
				}
			} else {
				num = nowSelected - 1 + num;
			}
		}
		replace(now, num);
	});

	$("#random").on("click", function(e) {
		e.preventDefault();
		for (var i = 0; i < Kns.info.length; i++) {
			$(".edit" + i + ":random").click();
			if (Math.random() > 0.5) {
				$("#color td:visible:random").click();
			} else {
				$("#color td:visible:eq(0)").click();
			}
		}
		$(".edit0").click();
	});
	
	Kns.start()
});