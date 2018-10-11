// Здесь соединяем хранилище и функции с компонентом

import {connect} from 'react-redux';
import {fetch_data,module} from '../redux/reducers/quotation';
import QuotationComponent from '../components/quotation';

const mapStateToProps = state => state;

const mapDispatchToProps = {
	fetch_data,
};

export default connect(mapStateToProps,mapDispatchToProps)(QuotationComponent);
