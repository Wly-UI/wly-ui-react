import { notification } from 'antd';
import { NotificationInstance, ArgsProps } from 'antd/lib/notification';
import './index.less';
interface WlyNotiFictionInstance extends NotificationInstance {}
const wlyNotiFiction: WlyNotiFictionInstance = {
	success: (args: ArgsProps) => {
		args.className = args?.className ? args.className + ' wly-notification' : ' wly-notification';
		notification.success(args);
	},
	error: (args: ArgsProps) => {
		args.className = args?.className ? args.className + ' wly-notification' : ' wly-notification';
		notification.error(args);
	},
	info: (args: ArgsProps) => {
		args.className = args?.className ? args.className + ' wly-notification' : ' wly-notification';
		notification.info(args);
	},
	warning: (args: ArgsProps) => {
		args.className = args?.className ? args.className + ' wly-notification' : ' wly-notification';
		notification.warning(args);
	},
	open: (args: ArgsProps) => {
		args.className = args?.className ? args.className + ' wly-notification' : ' wly-notification';
		notification.open(args);
	}
};
export { wlyNotiFiction };
