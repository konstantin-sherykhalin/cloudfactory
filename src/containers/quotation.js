// Здесь соединяем хранилище и функции с компонентом

import {connect} from 'react-redux';
import {fetch_data,module} from '../redux/reducers/quotation';
import QuotationComponent from '../components/quotation';

const mapStateToProps = state => ({
	loading: state[module].loading,
	loaded: state[module].loaded,
	data: state[module].data,
});

const mapDispatchToProps = {
	fetch_data,
};

export default connect(mapStateToProps,mapDispatchToProps)(QuotationComponent);
