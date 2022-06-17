import { ModalProps } from 'antd/lib/modal';
import { modalGlobalConfig, ModalStaticFunctions } from 'antd/lib/modal/confirm';
import useModal from 'antd/lib/modal/useModal';
import React from 'react';
export declare interface WlyModalProps extends ModalProps {
	wlyClassName?: string;
}

declare const OriginWlyModal: React.FC<WlyModalProps>;
declare type WlyModalType = typeof OriginWlyModal &
	ModalStaticFunctions & {
		useModal: typeof useModal;
		destroyAll: () => void;
		config: typeof modalGlobalConfig;
	};
declare const WlyModal: WlyModalType;
export default WlyModal;
