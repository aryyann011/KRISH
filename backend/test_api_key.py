import google.generativeai as genai

# Test API Key
API_KEY = "AIzaSyDkftYpzgo4zYiLhI_8jlbbB8SnmApXt4g"

print("=" * 60)
print("🔍 Testing Google Gemini API Key")
print("=" * 60)

try:
    # Configure the API key
    genai.configure(api_key=API_KEY)
    
    # List all available models
    print("\n📋 Available Models:")
    print("-" * 60)
    models = genai.list_models()
    
    models_found = []
    for model in models:
        model_name = model.name.replace("models/", "")
        supported_methods = []
        
        if model.supported_generation_methods:
            if "generateContent" in model.supported_generation_methods:
                supported_methods.append("Text Generation ✓")
            if "streamGenerateContent" in model.supported_generation_methods:
                supported_methods.append("Streaming ✓")
        
        models_found.append({
            "name": model_name,
            "methods": supported_methods,
            "display_name": model.display_name
        })
        
        print(f"\n✅ {model_name}")
        print(f"   Display Name: {model.display_name}")
        print(f"   Methods: {', '.join(supported_methods) if supported_methods else 'None'}")
        print(f"   Input Token Limit: {model.input_token_limit}")
        print(f"   Output Token Limit: {model.output_token_limit}")
    
    # Test a simple API call with gemini-1.5-pro
    print("\n" + "=" * 60)
    print("🧪 Testing API Call with gemini-1.5-pro")
    print("=" * 60)
    
    model = genai.GenerativeModel('gemini-1.5-pro')
    test_prompt = "You are an agricultural AI assistant. A farmer in West Bengal has Alluvial soil and wants to grow Rice. What should they do? Answer in 2 sentences."
    
    response = model.generate_content(test_prompt)
    
    print("\n✅ API Call Successful!")
    print(f"\n📝 Response:\n{response.text}")
    
    print("\n" + "=" * 60)
    print("✅ API KEY IS VALID AND WORKING!")
    print("=" * 60)
    print(f"✅ Available Models: {len(models_found)}")
    print(f"✅ Primary Model: gemini-1.5-pro")
    print("=" * 60)
    
except Exception as e:
    print(f"\n❌ ERROR: {str(e)}")
    print("\n" + "=" * 60)
    print("❌ API KEY ISSUE")
    print("=" * 60)
    
    if "API" in str(e) or "key" in str(e).lower():
        print("❌ Invalid API Key or Key Not Authorized")
    elif "quota" in str(e).lower() or "429" in str(e):
        print("❌ API Quota Exceeded - Billing Issue")
    else:
        print(f"❌ Error: {e}")
    print("=" * 60)
