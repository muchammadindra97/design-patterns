import {ComponentPrototype} from "./componentPrototype";
import {Button} from "./button";
import {Dialog} from "./dialog";

function loadComponents(): Map<string, ComponentPrototype> {
	const components = new Map<string, ComponentPrototype>();

	components.set('primary-btn', new Button().setColor('blue'));
	components.set('success-dialog', new Dialog().setColor('green'));

	return components;
}

function runClient() {
	const components = loadComponents();
	const primaryBtnComponent = components.get('primary-btn');
	const successDialogComponent = components.get('success-dialog');

	if (primaryBtnComponent) {
		const primaryBtn1 = primaryBtnComponent.clone();
		primaryBtn1.setLocation(1, 1);
		primaryBtn1.render();

		const primaryBtn2 = primaryBtnComponent.clone();
		primaryBtn2.setLocation(2, 2);
		primaryBtn2.render();
	}

	if (successDialogComponent) {
		const successDialog1 = successDialogComponent.clone();
		successDialog1.setLocation(3, 3);
		successDialog1.render();

		const successDialog2 = successDialogComponent.clone();
		successDialog2.setLocation(4, 4);
		successDialog2.render();
	}
}

runClient();
