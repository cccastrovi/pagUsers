export const ROUTES_PATHS = {
    AUTH: {
        DEFAUL: 'auth',
        LOGIN: 'login',
    },
    PANEL: {
        DEFAUL: 'panel',
        USER: 'user'
    }
};

export const INTERNAL_PATHS = {
    /**
     * AUTHENTICATION
     */
    AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAUL}`,
    AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
    /**
     * PANEL
     */
    PANEL_DEFAULT: `${ROUTES_PATHS.PANEL.DEFAUL}`,
    PANEL_USER_LIST: `${ROUTES_PATHS.PANEL.USER}`,
}

export const INTERNAL_ROUTES = {
    /**
     * AUTHENTICATION
     */
    AUTH_LOGIN: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
    /**
     * PANEL
     */
    PANEL_USER_LIST: `/${INTERNAL_PATHS.PANEL_DEFAULT}/${INTERNAL_PATHS.PANEL_USER_LIST}`
}
