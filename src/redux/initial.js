// Исходное состояние хранилища

var init = () => ({
	quotation: {
		list: [],
		error: null,
		loading: false,
		loaded: false,
	}
});
var initial = init();

export {initial,init};
