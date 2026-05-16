var Func = {};

Func.generateHTMLofCat = function(arr, rost, cl, dey) {
	var i = 0;
	var result = "";
	var keys = Object.keys(arr);
	for (var a = 0; a < keys.length; a++) {
		var folder = keys[a];
		var id = arr[folder];
		if (
			id < 1 || !id ||
			(folder == "vesto" && dey > 0) ||
			(dey == 1 && (folder == 'lkruro' || folder == 'pkruro') && id < 11) ||
			(folder == 'okuloj' && dey == 8) ||
			(dey == 1 && (folder == 'okuloj' || folder == 'brusto'))
		) {
			continue;
		}
		i++;
		var exp = 'gif';
		if (dey == 0 || (dey == 1 && ['lkruro', 'pkruro', 'vosto', 'kapo'].indexOf(folder) != -1)) {
			exp = 'png';
		}
		if (["koto", "vundoj", "swim", "veneno"].indexOf(folder) != -1) {
			folder = "surfaco/" + folder;
		} else if (['bazoj', 'okuloj', 'vesto'].indexOf(folder) == -1) {
			folder = "strioj/" + folder;
		}
		result += "<div style='background-image:url(koloroj/" + dey + "/" + folder + "/" + id + "." + exp + ");background-size:" + rost + "%'";
		if (i == 1) {
			result += " class='" + cl + "'";
		}
		result += '>';
	}
	for (var j = 0; j < i; j++) {
		result += '</div>';
	}
	return result;
};

Func.showCat = function(code, rost, wh, dey, vundo, clean, vesto, veneno, swim) {
	wh = wh || 0;
	dey = dey || 0;
	vesto = vesto || 0;
	if (dey == 25) {
		dey = 5;
	} else if (dey > 8 || dey == 7) {
		dey = 8;
	}
	var cod = code.split(' ');
	var kresko = 100 - 10 * (4 - rost);
	var cl = 'd';
	if (wh == 1) {
		var cl = 'e';
	} else if (wh == 2) {
		var cl = 'f';
	}
	var arr = {
		'bazoj'  : +cod[0],
		'okuloj' : +cod[1],
		'lkruro' : +cod[2],
		'pkruro' : +cod[3],
		'trunko' : +cod[4],
		'kapo'   : +cod[5],
		'vosto'  : +cod[6],
		'lorelo' : +cod[7],
		'porelo' : +cod[8],
		'brusto' : (cod[9] ? +cod[9] : 0),
		'hartufo': (cod[10] ? +cod[10] : 0),
		'vesto'  : vesto,
		'koto'   : clean,
		'vundoj' : vundo,
		'swim'   : swim,
		'veneno' : veneno
	};
	var html = Func.generateHTMLofCat(arr, kresko, cl, dey);
	return html;
};

Func.toCat = function(id) {
	$("#" + id).html(Func.showCat.apply(this, $("#" + id).text().split(",")));
};