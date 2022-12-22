module.exports = {
	extends: ['airbnb-base'],
	env: {
		node: true,
		es2021: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		// 'linebreak-style': ['error', 'windows'],
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
		'no-param-reassign': ['error', { props: false }],
		'no-console': 'off',
		'no-tabs': 'off',
		/* 'require-jsdoc': ['warn', {
			require: {
				FunctionDeclaration: true,
				MethodDefinition: true,
				ClassDeclaration: true,
			},
		}], */
		'space-before-function-paren': ['error', 'always'],
		'valid-jsdoc': ['error', {
			requireReturn: false,
			requireReturnType: true,
			requireParamDescription: false,
			requireReturnDescription: false,
		}],
		indent: ['error', 'tab'],
	},
};
