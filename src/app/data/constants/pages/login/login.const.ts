import { ThisReceiver } from "@angular/compiler";
import { ENUM_VALIDATION_OPTIONS } from "@data/enum";
import { IField } from "@data/interfaces"
import { ValidationsService } from "@shared/services/validations/validations.service";
import { ERRORS_VALIDATIONS } from "../../errors/errors-validations.const";

export const CONST_LOGIN_PAGE: {
    FORM: {
        email: IField;
        password: IField;
    };
} = {
    FORM: {
        email: {
            val: '',
            error: ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid() {
                const validationsService = new ValidationsService();
                const validateEmail = validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.EMAIL);
                this.error = validateEmail.msg;
                return validateEmail.isValid;
            }
        },
        password: {
            val: '',
            error: ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid() {
                const validationsService = new ValidationsService();
                const validatePassword = validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.PASSWORD);
                this.error = validatePassword.msg;
                return validatePassword.isValid;
            }
        }
    }
}