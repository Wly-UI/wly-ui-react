import { FormInstance, FormProps, List, useForm, useWatch } from 'antd/lib/form/Form';
import useFormInstance from 'antd/lib/form/hooks/useFormInstance';
import Item, { FormItemProps } from 'antd/lib/form/FormItem';
import { ReactNode } from 'react';
import ErrorList, { ErrorListProps } from 'antd/lib/form/ErrorList';
import { FormProvider } from 'antd/lib/form/context';
import { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface';
import { FormListProps } from 'antd/lib/form/FormList';

export declare interface WlyFormProps<Values> extends FormProps<Values> {
	wlyClassName?: string;
	children?: ReactNode;
}
declare const InternalForm: <Values = any>(
	props: WlyFormProps<Values> & {
		children?: React.ReactNode;
	} & {
		ref?: React.Ref<FormInstance<Values>> | undefined;
	}
) => React.ReactElement;
declare type InternalFormType = typeof InternalForm;
interface WlyFormInterface extends InternalFormType {
	useForm: typeof useForm;
	useFormInstance: typeof useFormInstance;
	useWatch: typeof useWatch;
	Item: typeof Item;
	List: typeof List;
	ErrorList: typeof ErrorList;
	Provider: typeof FormProvider;
	/** @deprecated Only for warning usage. Do not use. */
	create: () => void;
}
declare const WlyForm: WlyFormInterface;
export {
	FormInstance,
	FormProps,
	FormItemProps,
	ErrorListProps,
	Rule,
	RuleObject,
	RuleRender,
	FormListProps
};
export default WlyForm;
