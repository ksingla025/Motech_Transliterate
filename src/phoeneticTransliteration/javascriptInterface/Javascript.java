package phoeneticTransliteration.javascriptInterface;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;

public class Javascript {

	public static Object executeJavascript(String javascript, String parameter) throws Exception{
		// create a script engine manager
		ScriptEngineManager factory = new ScriptEngineManager();
		// create a JavaScript engine
		ScriptEngine engine = factory.getEngineByName("JavaScript");
		// evaluate JavaScript code from transliterate.js
		engine.eval(new java.io.FileReader("transliterate.js"));

		engine.eval(javascript);
		return engine.get(parameter);

	}

}
